const LIST_STORAGE_KEY = 'to-do-list';

export default{
	fetch(){
		return JSON.parse(window.localStorage.getItem(LIST_STORAGE_KEY) || '[]');
	},
	save(items){
		window.localStorage.setItem(LIST_STORAGE_KEY, JSON.stringify(items));
	}
}