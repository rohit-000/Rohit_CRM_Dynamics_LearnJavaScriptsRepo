function lookupfilter(executioncontext){

    var formContext = executioncontext.getFormContext();
    console.log(formContext);
    console.log("Rohit is in Island");
    // var producttext = formContext.getAttribute("crf5a_producttest").getValue();
    // var produttestid = producttext[0].id; 
    // console.log(producttext);
    // //addingfilter(produttestid)
    // formContext.getControl('crf5a_producttest').addPreSearch(addingfilter(produttestid))
    
    // function addingfilter(produttestid)
    // {
    //     var query = "<filter type='and'>   <condition attribute='statecode' operator='eq' value='0' />   <condition attribute='crf5a_account' operator='eq' uiname='Fourth Coffee'     uitype='account' value='"+produttestid+"' /> </filter>";
    //     console.log(query);
    //     formContext.getControl('crf5a_producttest').addCustomFilter(query,"crf5a_producttest");
    // }

} 

