import { model, Schema } from 'mongoose';
export default model(
	'User',
	Schema(
		{
			username: {
				type: String,
				required: true
			},
			password: {
				type: String,
				required: true
			},
			name: {
				type: String,
				required: true
			},
			lastName: {
				type: String,
				required: true
			},
			dateBirth: Date
		},
		{ timestamps: true }
	)
);
