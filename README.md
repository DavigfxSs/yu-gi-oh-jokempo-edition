# 🎮 Jogo de Cartas - Yu-Gi-Oh! Style 🃏

Este é um jogo de cartas inspirado no universo de **Yu-Gi-Oh!**, onde o jogador enfrenta um computador em um duelo de cartas. Cada carta possui um tipo (Papel, Pedra ou Tesoura), e o objetivo é escolher a carta certa para derrotar o oponente.

## 🚀 Tecnologias Utilizadas

- **HTML5** 🌐
- **CSS3** (com design responsivo) 🎨
- **JavaScript** (com manipulação DOM) 💻
- **Áudio e Vídeo** (para efeitos sonoros e fundo de tela) 🎶🎥

## 🎲 Como Jogar

1. **Objetivo**: Escolha uma carta do seu deck e enfrente o computador. Cada carta tem um tipo que pode vencer ou perder contra o tipo do computador. As opções são:
   - **Papel** ✋
   - **Pedra** ✊
   - **Tesoura** ✂️

2. **Como Jogar**:
   - Ao iniciar o jogo, você verá uma tela de introdução com as regras.
   - Após clicar no botão **"Começar"**, a música de fundo será ativada e o jogo será iniciado.
   - Você deve escolher uma carta clicando nela.
   - O computador escolherá uma carta aleatória.
   - O vencedor será determinado com base nas regras de **Papel** > **Pedra**, **Pedra** > **Tesoura**, e **Tesoura** > **Papel**.
   - O placar será atualizado e você poderá ver quantas vezes venceu e perdeu.

3. **Regras**:
   - **Papel** ✋ vence **Pedra** ✊
   - **Pedra** ✊ vence **Tesoura** ✂️
   - **Tesoura** ✂️ vence **Papel** ✋

## ✨ Funcionalidades

- **Tela de Regras**: Exibe uma janela pop-up com as regras do jogo e um botão para iniciar.
- **Áudio**: Ao começar o jogo, a música de fundo toca e é repetida em loop. 🎵
- **Cartas Aleatórias**: O jogador e o computador escolhem cartas aleatórias de um deck e enfrentam-se com base no tipo da carta.
- **Placar**: O jogo mantém um placar, mostrando quantas vitórias e derrotas o jogador teve. 🏆

## ⚙️ Como Configurar o Ambiente

1. **Clone o repositório**:
```bash
   git clone https://github.com/seu-usuario/jogo-cartas.git
```
2. **Instale as dependências** (se houver): Não há dependências externas para este projeto, mas caso queira usar algum servidor local, pode usar ferramentas como Live Server no VSCode ou http-server.

3. **Abra o arquivo HTML**: Abra o arquivo index.html em seu navegador para iniciar o jogo.

## 🤝 Como Contribuir

1. Faça um fork do repositório.
2. Crie uma branch para sua feature (git checkout -b feature/nome-da-feature).
3. Faça as alterações desejadas e commit (git commit -am 'Adicionando nova feature').
4. Push para a branch (git push origin feature/nome-da-feature).
5. Abra um pull request para o repositório principal.

## 🔮 Melhorias Futuras

- 🎮 **Modo Multiplayer**: Adicionar a possibilidade de jogar contra um amigo localmente ou online.
- 🌍 **Versão Mobile**: Melhorar a experiência em dispositivos móveis com ajustes adicionais no design responsivo.
- 🔄️ **Função Trade**: Adicionar uma mecânica para que o jogador escolha uma carta do seu deck para trocar.
