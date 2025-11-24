test(async () => {
	const form = queryFormById(rowform)
	assertNotUndefined(form)


	const [_table, originalRows ]= queryTableByTbodyId(rowtablebody, true);


	await triggerSubmit(form)
	
	const [_, newRows ]= queryTableByTbodyId(rowtablebody, true);
    const errorMessageelso = getErrorFieldContentByInputId(form, 'elso');
    const errorMessageMasodik = getErrorFieldContentByInputId(form, 'masodik');
    const errorMessageHarmadik = getErrorFieldContentByInputId(form, 'harmadik');
    assertNotEmptyString(errorMessageelso);
    assertNotEmptyString(errorMessageMasodik);
    assertNotEmptyString(errorMessageHarmadik);
	return assertEquals(originalRows, newRows, "Sort fűzött hozzá");
})