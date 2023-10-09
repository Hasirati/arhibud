import React from 'react'
import style from './Home.module.sass'
import Image from 'next/image'

const Home = () => {
	return (
		<main>
			<div className={style.home}>
				<div>
					<Image
						className={''}
						src='/doluna.png'
						alt='Arhibud Logo'
						width={520}
						height={360}
					/>
					<div className={style.caption}>
						<p>ЖК Глибока долина</p>
						<p>здача 4кв 2022р.</p>
					</div>
				</div>
				<div>
					<Image
						className={''}
						src='/gai.png'
						alt='Arhibud Logo'
						width={520}
						height={360}
					/>
					<div className={style.caption}>
						<p>ЖК Гаї Шевченківські</p>
						<p>Планується</p>
					</div>
				</div>
				<div>
					<Image
						className={''}
						src='/korolova.png'
						alt='Arhibud Logo'
						width={520}
						height={360}
					/>
					<div className={style.caption}>
						<p>ЖК Корольова</p>
						<p>Планується</p>
					</div>
				</div>
			</div>

			<div className={style.aboutMe}>
				<h1>ПРО НАС</h1>
				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s, when an unknown printer took a galley of type and
					scrambled it to make a type specimen book. It has survived not only
					five centuries, but also the leap into electronic typesetting,
					remaining essentially unchanged. It was popularised in the 1960s with
					the release of Letraset sheets containing Lorem Ipsum passages, and
					more recently with desktop publishing software like Aldus PageMaker
					including versions of Lorem Ipsum.
				</p>
				<div className={style.info}>
					<div>
						<p>6+</p>
						<p>ЗБУДОВАНИХ БУДИНКІВ</p>
					</div>
					<div>
						<p>12000+</p>
						<p>ЗДАНИХ В ЕКСПЛУАТАЦІЮ М²</p>
					</div>
					<div>
						<p>10+</p>
						<p>РОКІВ ДОСВІДУ В НЕРУХОМОСТІ</p>
					</div>
				</div>
				<div className={style.button}>
					<button>ДЕТАЛЬНІШЕ</button>
				</div>
			</div>

			<div className={style.makeCall}>
				<p>ЗАМОВИТИ ДЗВІНОК</p>
				<p>Заповніть форму, і ми передзвонимо вам протягом години</p>
				<div className={style.inputBox}>
					<div className={style.userBox}>
						<input type='text' required />
						<label>Ім’я</label>
					</div>
					<div className={style.userBox}>
						<input type='tel' required />
						<label>Моб. тел.</label>
					</div>
				</div>
				<div className={style.messageContainer}>
					<textarea className={style.message} placeholder='Повідомлення' />
				</div>
				<button>ВІДПРАВИТИ</button>
			</div>
		</main>
	)
}

export default Home
