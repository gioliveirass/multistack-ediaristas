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
