import React from 'react'
import style from './Section.module.sass'
import Image from 'next/image'

const Section = () => {
	return (
		<section>
			<div className={style.available}>
				<span>Доступно</span>

				<div className={style.block}>
					<div>
						<div className={style.ellipse}>12</div>
						<p>1-кімн. квартири</p>
						<button>переглянути планування</button>
					</div>

					<div>
						<div className={style.ellipse}>8</div>
						<p>2-кімн. квартири</p>
						<button>переглянути планування</button>
					</div>

					<div>
						<div className={style.ellipse}>3</div>
						<p>комерційні приміщення</p>
						<button>переглянути планування</button>
					</div>

					<div>
						<div className={style.ellipse}>4</div>
						<p>місця для парковки</p>
						<button>переглянути планування</button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Section
