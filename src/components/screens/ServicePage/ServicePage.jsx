import React, { useCallback, useEffect, useState } from 'react'
import styles from './ServicePage.module.css'
import { useLocation, useNavigate } from 'react-router-dom'
import Button from '../../Button/Button';
import { useTelegram } from '../../../hooks/useTelegram'


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

  const goBack = () => navigate(-1);

  const location = (useLocation().pathname).slice(1);
  

  const getInvoiceLink = async (price) => {
    const response = await fetch(`http://localhost:8000/api/createInvoiceLink`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({title: `${location}`, price})
    })
    return await response.json()
  } 

  const [items, setItems] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const [price, setPrice] = useState(0)
  const [invoiceLink, setInvoiceLink] = useState('')

  useEffect(() => {
    tg.BackButton.show();
  }, [price])

  useEffect(() => {
    tg.onEvent('backButtonClicked', goBack)
    return () => {
      tg.offEvent('backButtonClicked', goBack)
    }
  }, [])

  console.log(tg.onEvent('invoiceClosed', console.log('123')))

  useEffect(() => {
    tg.setHeaderColor(`${COLORS[location]}`);
    fetch(`http://localhost:8000/api/${location}`)
      .then(res => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false)
        const price = typeof arr[0].types[Object.keys(arr[0].types)[0]] === 'object' ? Object.entries(arr[0].types[Object.keys(arr[0].types)[0]])[0][1] : Object.entries(arr[0].types)[0][1]
        setPrice(price)
        getInvoiceLink(price)
          .then(link => setInvoiceLink(link))
        tg.MainButton.setParams({color: '#5CB85C', text: `Перейти к оплате ${price} ₽`})
        tg.MainButton.show()
      });
    }, []);
  
  const [active0, setActive0] = useState(0);
  const [active1, setActive1] = useState(0);
  
  const priceHandler = (price) => {
    setPrice(price);
    getInvoiceLink(price)
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
        <img src={`/${location}.jpg`} alt={location} width='100%'/>
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
                onClick={() => {setActive0(i); setActive1(0); priceHandler(Object.entries(items[0].types[Object.keys(items[0].types)[i]])[0][1])}} 
                active={active0 === i ? true : false}/>) 
              : 
              ''}
            </ul>
            <ul>
              {!isLoading ? Object.entries(items[0].types[Object.keys(items[0].types)[active0]]).map((item, i) => 
              <Button 
                key={i} 
                inner={item[0]} 
                onClick={() => {setActive1(i); priceHandler(item[1])}} 
                active={active1 === i ? true : false}/>) 
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
                onClick={() => {setActive0(i); priceHandler(type[1])}} 
                active={active0 === i ? true : false}/>) : ''}
            </ul>
          </>
          }
          {!isLoading && typeof items[0].types[Object.keys(items[0].types)[0]] !== 'object' ? '' : ''}
        </div>
      </div>
    </div>
  )
}

export default ServicePage