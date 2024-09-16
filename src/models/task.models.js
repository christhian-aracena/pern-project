const pool = require("../db");

class Task {
  // Método para crear una tarea
  static async create(titulo, description) {
    try {
      const result = await pool.query(
        "INSERT INTO task (titulo, description) VALUES($1, $2) RETURNING *",
        [titulo, description]
      );
      return result.rows[0];
    } catch (error) {
      console.error("Error al crear la tarea:", error.message);
      throw error;
    }
  }

  // Método para obtener todas las tareas
  static async getAllTask() {
    try {
      const result = await pool.query("SELECT * FROM task");
      return result.rows;
    } catch (error) {
      console.error("Error al obtener las tareas:", error.message);
      throw error;
    }
  }

  static async getTask(id) {
    try {
      const result = await pool.query("SELECT * FROM task WHERE id = $1", [id]);
      return result.rows[0];
    } catch (error) {
      console.error('Error al obtener la tarea', error.message);
      throw error;
      
    }
  }

  static async deleteTask(id){
    try {
      const result = await pool.query("DELETE FROM task WHERE id = $1", [id]);
      return result.rows[0]
    } catch (error) {
      console.error('error al eliminar la tarea', error.message)
      throw error;
      
    }
  }

  static async updateTask(id, titulo, description){
    try {
      const result = await pool.query("UPDATE task SET titulo = $1, description = $2 WHERE id = $3", [titulo, description, id])
      return result.rows[0]
    } catch (error) {
      next(error);
      
    }
  }
}

module.exports = Task;
