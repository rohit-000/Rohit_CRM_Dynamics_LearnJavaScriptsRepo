function ConfirmDialogOnload(executioncontext) {
    var formContext = executioncontext.getFormContext();
    var confirmStrings = { text: "This is a confirmation.", title: "Confirmation Dialog" };
    var confirmOptions = { height: 200, width: 450 };
    console.log(formContext.data.entity);
    var guidstring = formContext.data.entity._entityId.guid;
    console.log(guidstring);
    if (guidstring != "00000000-0000-0000-0000-000000000000") {
        Xrm.Navigation.openConfirmDialog(confirmStrings, confirmOptions).then(
            function (success) {
                if (success.confirmed)
                    console.log("Dialog closed using OK button.");
                else
                    console.log("Dialog closed using Cancel button or X.");
            });
    }
}

