const test = async (callback) => {
	try{
		return await callback();
	}catch(e){
		return e;
	}
}


const triggerSubmit = (form) => {
	const promise = promisifyEvent(form, 'submit', (e)=> e.preventDefault());
	form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
	return promise;
}

const promisifyEvent = (htmlElement, eventType, extraCallback = (_e) => {}) =>  {
	return new Promise((resolve) => {
		htmlElement.addEventListener(eventType, (e) => {
			extraCallback(e);
			resolve();
		})
	})
}

const triggerEvent = (htmlElement, eventType) => {
	const promise = promisifyEvent(htmlElement, eventType);
	htmlElement.dispatchEvent(new Event(eventType, { bubbles: true, cancelable: true }));
	return promise;
}