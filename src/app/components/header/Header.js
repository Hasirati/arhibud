import React from 'react'
import Image from 'next/image'
import style from './Header.module.css'

const Header = () => {
	return (
		<div className={style.header}>
			<Image
				className={''}
				src='/logo.svg'
				alt='Arhibud Logo'
				width={180}
				height={37}
				priority
			/>
				<ul>
					<li>Будується</li>
					<li>Збудовано</li>
					<li>Новини</li>
					<li>Про нас</li>
					<li>Контакти</li>
				</ul>
				<button>Замовити дзвінок</button>
		</div>
	)
}

export default Header
