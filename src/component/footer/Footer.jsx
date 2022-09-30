import React from "react"
import s from './Footer.module.css'


const Footer = () => {
    return (
        <div className={s.footer_wraper}>
            <div className={s.img_logo}>
                img_logo
            </div>
            <div className={s.sub_linc}>
                <div className={s.faq}>
                    
                    <ul>faq
                        <li>
                            -о проекте
                        </li>
                        <li>
                            -состояние сервиса
                        </li>
                        <li>
                            -связь
                        </li>
                    </ul>



                </div>
                <div className={s.about}>
                    
                    <ul>about company
                        <li>
                            -задача проекта
                        </li>
                        <li>
                            -партнерские программы
                        </li>
                    </ul>


                </div>
                <div className={s.community}>
                   
                    <ul>community
                        <li>
                            -блог
                        </li>
                        <li>
                            -гит
                        </li>
                        <li>
                            -линки на соцсети
                        </li>
                        <li>
                            -ссылка на резюме
                        </li>
                    </ul>




                </div>

            </div>
            
                <div className={s.sub_meta}>
                авторское право
                разрабонан (ССЫЛКА на меня)

            </div>
            <div className={s.sub_link_app}>
                img_link_socialNetwork
                android react-app
            </div>
            
            
        </div>
    )
}
export default Footer