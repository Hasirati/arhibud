import React from 'react'
import Image from 'next/image'
import style from './Header.module.sass'

const Header = () => {
	return (
		<div className={style.header}>
			<div className={style.headerImg}>
				<Image src='/logo.svg' alt='Arhibud Logo' fill />
			</div>
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
