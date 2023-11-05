import React, { useCallback, useEffect, useState } from 'react'
import styles from './ServicePage.module.css'
import { useLocation, useNavigate } from 'react-router-dom'
import Button from '../../Button/Button';
import { useTelegram } from '../../../hooks/useTelegram'
import Accordion from '../../Accordion/Accordion';


const {tg} = useTelegram()

const COLORS = {
  discord: '#586AE9',
  faceit: '#FFFFFF',
  spotify: '#19E58D',
  steam: '#C0DFDC',
}



const ServicePage = () => {
  

  tg.BackButton.show();

  const navigate = useNavigate();

  const goBack = () => navigate(
    '/'
  );

  const location = (useLocation().pathname).slice(1);
    

  const [items, setItems] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [price, setPrice] = useState(0);
  const [invoiceLink, setInvoiceLink] = useState('')
  const [activeType, setActiveType] = useState(0);
  const [activeTime, setActiveTime] = useState(0);
  const [type, setType] = useState();
  const [time, setTime] = useState();
  const [name, setName] = useState();


  const getInvoiceLink = async (price, photoUrl, type, time, name='') => {
    const response = await fetch(`https://bonniezu.ru/api/createInvoiceLink`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({title: `${!!name ? '🕹️ ' + name : location }`, price, photoUrl, data: !!type & !!!name ? location + ' ' + type + ' ' + time : name + ' ' + time})
    })
    return await response.json()
  } 


  useEffect(() => {
    tg.BackButton.show();
  }, [price])


  useEffect(() => {
    tg.setHeaderColor(`${COLORS[location] || 'secondary_bg_color'}`);
    tg.onEvent('backButtonClicked', goBack)
    fetch(`https://bonniezu.ru/api/${location}`)
      .then(res => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false)
        const price = typeof arr[0].types[Object.keys(arr[0].types)[0]] === 'object' ? Object.entries(arr[0].types[Object.keys(arr[0].types)[0]])[0][1] : Object.entries(arr[0].types)[0][1]
        setPrice(price)
        const type = typeof arr[0].types[Object.keys(arr[0].types)[0]] === 'object' ? Object.keys(arr[0].types)[0] : ''
        const time = (typeof arr[0].types[Object.keys(arr[0].types)[0]] === 'object' ? Object.entries(arr[0].types[Object.keys(arr[0].types)[0]])[0][0] : Object.entries(arr[0].types)[0][0])
        setName(arr[0]?.name)
        getInvoiceLink(price, 'https://cybersport.metaratings.ru/storage/images/4f/9a/4f9ab43ff49dd6ad63eaf036295f12cb.jpg', type, time, arr[0]?.name)
          .then(link => setInvoiceLink(link))
        tg.MainButton.setParams({color: '#5CB85C', text: `Перейти к оплате ${price} ₽`})
        tg.MainButton.show()
      });

      return () => {
        tg.offEvent('backButtonClicked', goBack)
        // tg.offEvent('invoiceClosed')
      }

    }, []);
  

  const buttonHandler = (price, type, time, name='') => {
    setPrice(price);
    getInvoiceLink(price, 'https://cybersport.metaratings.ru/storage/images/4f/9a/4f9ab43ff49dd6ad63eaf036295f12cb.jpg', type, time, name)
      .then(link => setInvoiceLink(link))
    tg.MainButton.setParams({text: `Перейти к оплате ${price} ₽`});
  }


  const onInvoiceLink = useCallback(() => {
    tg.openInvoice(invoiceLink)
  }, [invoiceLink])
  

  useEffect(() => {
    tg.MainButton.onClick(onInvoiceLink)
    return () => {
      tg.MainButton.offClick(onInvoiceLink)
    }
  }, [onInvoiceLink])
  

  return (
    <div className={styles.service_page}>
      <div className={styles.service_image} style={{ backgroundColor: `${COLORS[location]}` }}>
        {!isLoading ? <img src={location.includes('games') ? `${items[0].gameImage}` : `/${location}.jpg`} alt={location} width='100%'/> : 'Loading...'}
        
      </div>
      <div className={styles.order_card}>
        <div className={styles.order_price}>
          {price} ₽
        </div>
        <hr/>
        <div className={styles.order_selector}>
          {!isLoading && typeof items[0].types[Object.keys(items[0].types)[0]] === 'object' ? 
          <>
            <ul>
              {!isLoading ? Object.keys(items[0].types).map((type, i) => 
              <Button 
                key={i} 
                inner={type} 
                onClick={() => {setActiveType(i); setActiveTime(0); setType(type); setTime(Object.keys(items[0].types[type])[0]); buttonHandler(Object.entries(items[0].types[Object.keys(items[0].types)[i]])[0][1], type, Object.keys(items[0].types[type])[0])}} 
                active={activeType === i ? true : false}/>) 
              : 
              ''}
            </ul>
            <ul>
              {!isLoading ? Object.entries(items[0].types[Object.keys(items[0].types)[activeType]]).map((item, i) => 
              <Button 
                key={i} 
                inner={item[0]} 
                onClick={() => {setActiveTime(i); setTime(item[0]); buttonHandler(item[1], type, item[0]);}} 
                active={activeTime === i ? true : false}/>) 
              : 
              ''}
            </ul>
          </>
          :
          <>
            <ul>
              {!isLoading ? Object.entries(items[0].types).map((type, i) => 
              <Button key={i} 
                inner={type[0]} 
                onClick={() => {setActiveTime(i); buttonHandler(type[1], '', type[0], name);}} 
                active={activeTime === i ? true : false}/>) : ''}
            </ul>
          </>
          }
        </div>
      </div>
      <div className={styles.about_card}>
        {!isLoading && !!items[0]?.description ? Object.keys(items[0]?.description).map((item, i) => (
          <Accordion title={item} content={items[0]?.description[item]}/>
        )) : ''}
      </div>
    </div>
  )
}

export default ServicePage