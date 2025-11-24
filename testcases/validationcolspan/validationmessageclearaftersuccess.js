test(async () => {
	const form = queryFormById(rowform)
	assertNotUndefined(form)


	const [_table, originalRows ]= queryTableByTbodyId(rowtablebody, true);


	setInputValueByid(form, 'elso','Test item')
	setInputValueByid(form, 'harmadik','Test item1')


	await triggerSubmit(form)
	
	const [_, newRows ]= queryTableByTbodyId(rowtablebody, true);
    const errorMessageMasodik = getErrorFieldContentByInputId(form, 'masodik');
    assertNotEmptyString(errorMessageMasodik);
    assertEquals(originalRows, newRows, "Sort fűzött hozzá");
    setInputValueByid(form, 'masodik', 'test item 2');
    await triggerSubmit(form)
    const elemList = ['elso', 'masodik', 'harmadik'];
    elemList.map(elem => 
        getErrorFieldContentByInputId(form, elem) 
    ).forEach(element => {
        assertEmptyString(element);
    });
    const [__, newRowsAgain ]= queryTableByTbodyId(rowtablebody, true);
	return assertNotEquals(originalRows+1, newRowsAgain, "Nem fuzott hozza sort");
})