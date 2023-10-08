import React from 'react'
import Image from 'next/image'
import style from './Footer.module.css'

const Footer = () => {
	return (
		<div className={style.footer}>
			<Image src='/footer.svg' alt='Arhibud Logo' width={160} height={150} />

			<div className={style.hr} />

			<div className={style.text}>
				<p className={style.fc}>ОФІС ПРОДАЖУ</p>
				<div>
					<p>+38 (067) 208 58 36</p>
					<p>вул. Котляревського, 69 Офіс 154 Архібуд </p>
				</div>
				<p>Ми працюємо <br /> з понеділка по п'ятницю <br /> з 9:00 до 17:00</p>
			</div>

			<ul>
				<li>Головна</li>
				<li>Будується</li>
				<li>Збудовано</li>
				<li>Новини</li>
				<li>Про нас</li>
				<li>Контакти</li>
			</ul>

			<div className={style.svg}>
				<Image src='/inst.svg' alt='instagram' width={40} height={40} />
				<Image src='/fb.svg' alt='instagram' width={40} height={40} />
			</div>
		</div>
	)
}

export default Footer
