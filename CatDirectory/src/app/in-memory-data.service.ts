import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
	createDb() {
		const cats = [
			  { id: 0, name: 'Tiger', color: 'Ginger', country: 'Germany'},
			  { id: 1, name: 'Jimmy', color: 'Black', country: 'UK'},
			  { id: 2, name: 'Millie', color: 'white', country: 'UK' },
			  { id: 3, name: 'Denzel', color: 'Black', country: 'UK'},
			  { id: 4, name: 'Shadow the White kitty', color: 'White', country: 'Maylaysia'},
			  { id: 5, name: 'Rupert', color: 'Mixed', country: 'UK'},
			  { id: 6, name: 'Alsan', color: 'White', country: 'UK'},
			  { id: 7, name: 'Reno', color: 'Ginger', country: 'UK'},
			  { id: 8, name: 'Billy the time cat', color: 'Black', country: 'Belgium'},
			  { id: 9, name: 'Misty', color: 'Tabby', country: 'UK'},
			  { id: 10, name: 'Harvey', color: 'Black', country: 'UK'}
		];
		return {cats}
	}
}