import mysql.connector

conn = mysql.connector.connect(
    host='localhost',
    user='root',
    password='',
    database='proyecto'
)

cursor = conn.cursor()

# Alterar la columna ENUM para agregar 'directivo'
cursor.execute("""
    ALTER TABLE chat_general 
    MODIFY COLUMN tipo_usuario ENUM('alumno', 'docente', 'directivo') NOT NULL
""")

conn.commit()

print("✅ Columna tipo_usuario actualizada para incluir 'directivo'")

# Verificar el cambio
cursor.execute("SHOW COLUMNS FROM chat_general WHERE Field = 'tipo_usuario'")
tipo_col = cursor.fetchone()
print(f"Nueva definición: {tipo_col}")

cursor.close()
conn.close()
