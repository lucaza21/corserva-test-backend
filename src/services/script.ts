// script.ts (puedes nombrarlo como desees)
import * as fs from 'fs/promises';
import { sequelize } from '../database'; // Asegúrate de que el path sea correcto según tu estructura de carpetas
import { SaleOrderItem } from '../models/SaleOrderItem'; // Asegúrate de que el path sea correcto según tu estructura de carpetas

async function populateDatabase() {
	// Lee el archivo JSON
	const jsonData = await fs.readFile('./salesOrders.json', 'utf-8');
	const saleOrderItemsData = JSON.parse(jsonData);

	try {
		// Sincroniza los modelos con la base de datos
		await sequelize.sync();

		// Inserta los datos en la tabla sale_order_items
		await SaleOrderItem.bulkCreate(saleOrderItemsData);

		console.log('Datos insertados correctamente en la base de datos.');
	} catch (error) {
		console.error('Error al insertar datos:', error);
	} finally {
		// Cierra la conexión de Sequelize después de completar las operaciones
		await sequelize.close();
	}
}

// Ejecuta la función para insertar datos
populateDatabase();
