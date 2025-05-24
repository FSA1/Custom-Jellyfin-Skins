# Custom Jellyfin Skins

🎨 Uma coleção de temas personalizados para o servidor de mídia [Jellyfin](https://jellyfin.org), desenvolvidos para alterar visualmente a interface web com novos estilos, cores e fontes.

## 📦 O que este repositório contém

- Skins personalizadas para Jellyfin
- Arquivos CSS com temas como "Prime Video style" e outros
- Pré-visualizações e organização para facilitar o uso
- Código aberto e pronto para colaboração

<p align="center">
  <img src="https://raw.githubusercontent.com/FSA1/Custom-Jellyfin-Skins/refs/heads/main/themes/amazon/preview.png" alt="Pré-visualização do tema 'Prime'" width="600">
</p>

---

> **Aviso legal**  
> Este projeto não é afiliado, patrocinado ou endossado por nenhuma das marcas mencionadas.  
>  
> **Jellyfin** é uma marca registrada de seus respectivos desenvolvedores. O uso do nome e da interface base do Jellyfin neste projeto é feito unicamente para fins de personalização, sem a intenção de representar oficialmente a equipe do Jellyfin.  
>  
> **Amazon** e **Amazon Prime Video**, bem como seus logotipos e quaisquer imagens relacionadas, são marcas registradas da Amazon.com, Inc. ou de suas afiliadas. O uso de nomes ou elementos visuais inspirados nesses serviços é apenas para fins ilustrativos e de personalização visual, sem intenção de violar direitos autorais ou de marca.


## Plugins Recomendados
Editor's Choice (https://github.com/lachlandcp/jellyfin-editors-choice-plugin)
Editor's Choice is a plugin for the Jellyfin web UI that adds a full-width slider to the main page to feature selected content, similar to the main Netflix home page.

## Licença

Este repositório está licenciado sob a GNU GPL v3.0.  
Partes do código (incluindo o tema base "Dark") são baseadas no projeto [Jellyfin](https://github.com/jellyfin/jellyfin-web), também licenciado sob a GPLv3.

---

## 🚀 Como usar uma skin personalizada

1. Acesse a área administrativa do Jellyfin.
2. Vá até **Dashboard > Geral**.
3. No campo **CSS personalizado**, cole a seguinte linha:

   ```css
	@import url('https://cdn.jsdelivr.net/gh/FSA1/Custom-Jellyfin-Skins/themes/dark/theme.css');
	@import url('https://cdn.jsdelivr.net/gh/FSA1/Custom-Jellyfin-Skins/themes/amazon/prime-theme.css');