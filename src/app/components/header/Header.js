import React from 'react'
import Image from 'next/image'
import style from './Header.module.sass'

const Header = () => {
	return (
		<div className={style.header}>
			<div className={style.headerImg}>
				<Image src='/logo.svg' alt='Arhibud Logo' fill />
			</div>
			<button className={style.iconCall}>
				<Image
					src='/phone-incoming.svg'
					alt='Button for call'
					width={32}
					height={32}
				/>
			</button>
			<ul>
				<li>Будується</li>
				<li>Збудовано</li>
				<li>Новини</li>
				<li>Про нас</li>
				<li>Контакти</li>
			</ul>
			<button className={style.headerBut}>Замовити дзвінок</button>
			<div className={style.header_burger}>
				<span></span>
			</div>
		</div>
	)
}

export default Header
