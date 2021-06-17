## 🚀 Rodando o Painel Administrativo

Antes de rodar os comandos abaixo, certifique-se de que você está com a pasta /multistack-ediaristas aberta no terminal.

```
# Entre na pasta /django:
cd django

# Crie uma virtualenv nomeada '.venv' e ative-a

# Instale as dependências:
pip install -r requirements.txt

# Entre na pasta /ediaristas_django:
cd ediaristas_django

# Rode as migrações:
python manage.py migrate

# Inicie a aplicação:
python manage.py runserver

```

O painel será iniciado em http://127.0.0.1:8000/web/listar_diaristas.

<hr>

[![Voltar ao ínicio do repositório](https://img.shields.io/badge/Voltar_ao_ínicio_do_repositório-375BD2?style=for-the-badge)](https://github.com/gioliveirass/multistack-ediaristas)
