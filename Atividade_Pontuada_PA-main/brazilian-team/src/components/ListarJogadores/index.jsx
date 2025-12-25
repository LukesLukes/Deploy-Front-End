// src\components\ListarJogadores\index.jsx

import React from 'react';
import './styles.css';

function ListarJogadores({ jogadores }) {
    return (
        <section className="listar-jogadores">
            <h2>Jogadores Cadastrados</h2>
            <div className="jogadores-lista">
                {jogadores.length === 0 ? (
                    <p>Nenhum jogador cadastrado.</p>
                ) : (
                    jogadores.map((jogador, idx) => (
                        <div className="jogador-card" key={idx}>
                            {jogador.imagem && (
                                <img src={jogador.imagem} alt={jogador.nome} className="jogador-imagem" />
                            )}
                            <div className="jogador-info">
                                <h3>{jogador.nome} <span className="camisa">#{jogador.camisa}</span></h3>
                                <p><strong>Posição:</strong> {jogador.posicao}</p>
                                <p><strong>Gols:</strong> {jogador.gols} | <strong>Assistências:</strong> {jogador.assistencias}</p>
                                <p><strong>Jogos:</strong> {jogador.jogos} | <strong>Vitórias:</strong> {jogador.vitorias} | <strong>Empates:</strong> {jogador.empates} | <strong>Derrotas:</strong> {jogador.derrotas}</p>
                                <p><strong>Cartões:</strong> 🟨 {jogador.cartoesAmarelos} &nbsp; 🟥 {jogador.cartoesVermelhos}</p>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </section>
    );
}

export default ListarJogadores;