import React from 'react'
import st from './Built.module.sass'
import Image from 'next/image'

const Built = () => {
	return (
		<main>
			<div className={st.aboutJK}>
				<div className={st.bydunok}>
					<h1>Житловий комплекс “Тернопіль”</h1>
					<span>
						Тернопіль, вулиця <b>Олександра Довженка, 17</b>
					</span>
				</div>

				<div className={st.caption}>
					<div className={st.mainImg}>
						<Image src='/jkTernopil.png' alt='JK Ternopil' fill />
					</div>

					<div className={st.aboutHome}>
						<div className={st.butt}>
							<div className={st.fourM}>
								Здача:<b style={{ whiteSpace: 'pre' }}> Липень 2021</b>
							</div>

							<div className={st.four}>
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
						</div>

						<div className={st.more}>
							<Image src='/line.svg' alt='line' width={1} height={240} />
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
			</div>
		</main>
	)
}

export default Built
