test(async () => {
	const form = queryFormById(colform)
	assertNotUndefined(form)


	const [_table, originalRows ]= queryTableByTbodyId(coltablebody, true);


	setInputValueByid(form, 'masodik','Test item')
	setInputValueByid(form, 'harmadik','Test item1')


	await triggerSubmit(form)
	
	const [_, newRows ]= queryTableByTbodyId(coltablebody, true);
    const errorMessageElso = getErrorFieldContentByInputId(form, 'elso');
    assertNotEmptyString(errorMessageElso);
	return assertEquals(originalRows, newRows, "Sort fűzött hozzá");
})