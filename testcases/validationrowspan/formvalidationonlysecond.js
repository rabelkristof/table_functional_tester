test(async () => {
	const form = queryFormById(colform)
	assertNotUndefined(form)


	const [_table, originalRows ]= queryTableByTbodyId(coltablebody, true);


	setInputValueByid(form, 'masodik','Test item1')


	await triggerSubmit(form)
	
	const [_, newRows ]= queryTableByTbodyId(coltablebody, true);
    const errorMessageFirst = getErrorFieldContentByInputId(form, 'elso');
    assertNotEmptyString(errorMessageFirst);
	const errorMessageThird = getErrorFieldContentByInputId(form, 'harmadik');
    assertNotEmptyString(errorMessageThird);
	return assertEquals(originalRows, newRows, "Sort fűzött hozzá");
})