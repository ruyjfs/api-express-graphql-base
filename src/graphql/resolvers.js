import { dbConnection, Types } from '../db';
const collection = dbConnection.collection('user');
import User from '../models/user';

export default {
	async user(params) {
		// return await collection.find(params).toArray();
		return await User.findOne(params).exec();
	},
	async users(params) {
		// if (params._id) {
		// 	params._id = Types.ObjectId(params._id);
		// }
		// return await collection.find(params).toArray();
		return await User.find(params).exec();
	},
	async createUser(params) {
		// params.createdAt = new Date();
		// return await collection.insertOne(params).then((result) => result.ops[0]);
		return await User.create(params);
	},
	async updateUser(params) {
		const id = Types.ObjectId(params._id);
		delete params._id;
		// params.updatedAt = new Date();
		// await collection.updateOne({ _id: id }, { $set: params }, { upsert: true }).then((result) => result);
		// return await collection.findOne({ _id: id });
		return await User.updateOne({ _id: id }, params);
	}
};
