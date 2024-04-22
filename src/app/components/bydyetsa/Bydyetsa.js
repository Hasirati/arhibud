import React from 'react'
import style from './Bydyetsa.module.sass'
import Image from 'next/image'

const Bydyetsa = () => {
	return (
		<main>
			<div className={style.bydunok}>
				<h1>Житловий комплекс “Тернопіль”</h1>
				<span>
					Тернопіль, вулиця <b>Олександра Довженка, 17</b>
				</span>
			</div>
			<div className={style.caption}>
				<div className={style.mainImg}>
					{/* <Image src='/jkTernopil.png' fill /> */}
				</div>
				<div className={style.aboutHome}>
					<div className='butt'>
						<div>
							Здача: <b>Липень 2021</b>
						</div>
						<div>
							<span>4</span>Секцій
						</div>
						<div>
							<span>10</span>Поверхів
						</div>
						<div>
							<span>36</span>Квартир
						</div>
						<div>
							<span>22</span>Квартир
						</div>
					</div>
					<div className='more'>
						{/* <Image src='/line.svg' fill /> */}
						<ul>
							<li>
								Стіни: <span>Цегла</span>
							</li>
							<li>
								Утеплення: <span>Пінопласт 10 см.</span>
							</li>
							<li>
								Опалення: <span>Індивідуальне газове</span>
							</li>
							<li>
								Прибудинкова територія: <span>Закритий двір</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</main>
	)
}

export default Bydyetsa
