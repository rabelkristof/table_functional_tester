test(async () => {
	const form = queryFormById(colform)
	assertNotUndefined(form)


	const [_table, originalRows ]= queryTableByTbodyId(coltablebody, true);


	setInputValueByid(form, 'elso','Test item1')


	await triggerSubmit(form)
	
	const [_, newRows ]= queryTableByTbodyId(coltablebody, true);
    const errorMessageThird = getErrorFieldContentByInputId(form, 'harmadik');
    assertNotEmptyString(errorMessageThird);
	const errorMessageSecond = getErrorFieldContentByInputId(form, 'masodik');
    assertNotEmptyString(errorMessageSecond);
	return assertEquals(originalRows, newRows, "Sort fűzött hozzá");
})