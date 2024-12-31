# Cookie Cleaner

Cookie Cleaner é uma extensão para Google Chrome que permite limpar facilmente os cookies do site atual.

## Estrutura do Projeto

```
cookie-cleaner/
|-- icons/
|   |-- icon16.png
|   |-- icon48.png
|   |-- icon128.png
|-- manifest.json
|-- popup.html
|-- popup.js
|-- style.css
```

## Instalação e Uso

1. **Clone ou baixe o repositório**:

   ```bash
   git clone https://github.com/jpbsampaio/cookie-cleaner.git
   ```

2. **Abra a página de extensões no Chrome**:

   - Acesse `chrome://extensions/`.
   - Habilite o modo desenvolvedor (canto superior direito).

3. **Carregue a extensão**:

   - Clique em "Carregar sem compactação".
   - Selecione a pasta `cookie-cleaner`.

## Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do repositório.
2. Crie uma branch para sua feature ou correção:
   ```bash
   git checkout -b minha-feature
   ```
3. Envie suas modificações:
   ```bash
   git add .
   git commit -m "Adiciona minha nova feature"
   git push origin minha-feature
   ```
4. Abra um Pull Request.

## To-Do List

### Melhorias Visuais (!!!)

- Tornar o design do popup mais atrativo.
- Adicionar animações ao clicar no botão.
- Melhorar o layout para exibir informações com mais clareza.

### Novas Funcionalidades

- Adicionar opção para limpar cookies de outros domínios.
- Implementar uma lista de exceções para evitar remoção de cookies importantes.
- Adicionar notificações para confirmar a remoção dos cookies.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

