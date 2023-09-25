import React from 'react';
import style from './home.module.css';
import { Header } from '../Header';
import { Card } from '../../components/Card';
import { Link, useNavigate } from 'react-router-dom';
import { Dropdown } from '../../components/Dropdown';
import { Input } from '../../components/Input';
import { locations } from '../../utils/data';

const assetsPath = process.env.PUBLIC_URL;
const headerMenus = [{
    element: <Link className={`nav-link ${style.navLinkStyle}`} to={'#'}>Log in</Link>,
    parentClassNames: 'ms-auto'
}, {
    element: <Link className={`nav-link ${style.navLinkStyle}`} to={'#'}>Sign up</Link>
}];

export const Home = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className={`${style.home}`}>
                <Header menus={headerMenus} />
                <div className='row p-5'>
                    <h1 className={`${style.h1}`}>BHUKKAD</h1>
                    <h2>Discover the best food & drinks</h2>
                    <div className='row justify-content-center mt-4'>
                        <Dropdown classNames='form-control p-3 w-25 noTopRightBorder noBottomRightBorder' options={locations} />
                        <Input type='text'
                            classNames='form-control p-3 w-50 noTopLeftBorder noBottomLeftBorder'
                            placeholder='Search for restaurant, cusine or a dish' value='' />
                    </div>
                </div>
            </div>
            <div className={`mt-4 ${style.px10}`}>
                <div className='d-flex gap-4'>
                    <Card
                        imgSrc={`${assetsPath}/orderOnline.avif`}
                        text='Stay home and order to your doorstep'
                        title='Order Online'
                        classNames={`col-12 col-md-4 text-start cursor-pointer ${style.hoverCard}`}
                        onClick={() => navigate('order-food-online')} />
                    <Card
                        imgSrc={`${assetsPath}/dining.avif`}
                        text={`VIew the city's favourite dining venues`}
                        title='Dining'
                        classNames={`col-12 col-md-4 text-start cursor-pointer ${style.hoverCard}`} />
                    <Card
                        imgSrc={`${assetsPath}/nightlifeClubs.avif`}
                        text={`Explore the city's top nightlife outlets`}
                        title='Nightlife and Clubs'
                        classNames={`col-12 col-md-4 text-start cursor-pointer ${style.hoverCard}`} />
                </div>
            </div>
        </>
    )
}