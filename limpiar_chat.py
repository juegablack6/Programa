import mysql.connector

conn = mysql.connector.connect(
    host='localhost',
    user='root',
    password='',
    database='proyecto'
)

cursor = conn.cursor()

# Limpiar mensajes sin rol
cursor.execute("DELETE FROM chat_general WHERE tipo_usuario IS NULL OR tipo_usuario = ''")
conn.commit()

print(f"✅ Se eliminaron {cursor.rowcount} mensajes sin rol")

cursor.close()
conn.close()
