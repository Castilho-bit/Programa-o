import { useState } from 'react'
import './App.css'
import Postgresql from './assets/Postgresql_elephant.svg.png'
import { BookOpen } from 'lucide-react';


export default function App() {

  return (
    <>
      <main>
        <section>
          <img src={Postgresql} alt="" />
          <h1>PostgreSQL</h1>
          <p>O PostgreSQL é um sistema de gerenciamento de banco de dados relacional (SGBD) de código aberto, amplamente reconhecido por sua robustez, segurança e conformidade com padrões SQL. Ele é utilizado tanto em aplicações pequenas quanto em sistemas corporativos de grande escala, oferecendo alta confiabilidade no armazenamento e manipulação de dados.</p>
          <p>Uma de suas principais características é o suporte a consultas complexas, integridade transacional (ACID) e extensibilidade, permitindo que desenvolvedores criem funções personalizadas, tipos de dados e extensões. Além disso, o PostgreSQL possui recursos avançados como replicação, particionamento de tabelas, suporte a JSON e integração com diversas linguagens de programação.</p>
          <p>Por ser open source, conta com uma comunidade ativa que contribui constantemente para sua evolução, garantindo atualizações frequentes e melhorias de desempenho. Assim, o PostgreSQL se destaca como uma solução poderosa, flexível e confiável para gerenciamento de dados em diferentes tipos de aplicações.</p>
        </section>

        <footer>
          <div id="social">
            
            <a href="https://www.postgresql.org/about/" target="_blank" rel="noopener noreferrer">
  <button><div id='livro'><BookOpen/></div>Saiba mais sobre PostgreSQL</button>
</a>
          </div>
        </footer>
      </main>
    </>
  )
}
