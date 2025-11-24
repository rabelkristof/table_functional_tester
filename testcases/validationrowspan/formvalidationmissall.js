test(async () => {
	const form = queryFormById(colform)
	assertNotUndefined(form)


	const [_table, originalRows ]= queryTableByTbodyId(coltablebody, true);


	await triggerSubmit(form)
	
	const [_, newRows ]= queryTableByTbodyId(coltablebody, true);
    const errorMessageelso = getErrorFieldContentByInputId(form, 'elso');
    const errorMessageMasodik = getErrorFieldContentByInputId(form, 'masodik');
    const errorMessageHarmadik = getErrorFieldContentByInputId(form, 'harmadik');
    assertNotEmptyString(errorMessageelso);
    assertNotEmptyString(errorMessageMasodik);
    assertNotEmptyString(errorMessageHarmadik);
	return assertEquals(originalRows, newRows, "Sort fűzött hozzá");
})