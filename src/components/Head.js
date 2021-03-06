import React from 'react';
import FadeIn from 'react-fade-in/lib/FadeIn';

function Head() {
    return (

        <div className="introduce">
            <FadeIn
                delay="800" >
                <div className="hello">
                    <h1>Hello I'm Jaehyeon Park <span className="hand">π</span></h1>
                </div>
                <div className="my_role">
                    <img className="profile" src="https://img1.daumcdn.net/thumb/C428x428/?scode=mtistory2&fname=https%3A%2F%2Ftistory4.daumcdn.net%2Ftistory%2F4691630%2Fattach%2Fba273e597648456f9f2969a03883810c" alt="profile" />
                    <p> μλνμΈμ μ μ νλ‘ νΈμλ κ°λ°μ λ°μ¬νμλλ€.</p>
                    <p>μ λ λ°°μ°λ κ²μ μ’μνλ©° ν­μ μκΈ°κ³λ°μ ν΅ν΄ μ±μ₯ν΄λκ°κ³  μμ΅λλ€.</p>
                    <h6>λ μμλ³΄κΈ°λ₯Ό μνμ λ€λ©΄<br /> μΉ΄νκ³ λ¦¬λ₯Ό λλ₯΄λ©΄ νμ΄μ§λ‘ μ΄λν©λλ€</h6>
                </div>
            </FadeIn>

        </div>
    )
}

export default Head;