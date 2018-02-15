
({
    extractfile: function(component, event, helper) {
        alert('button clicked');
        var val = component.find("select").get("v.value");
        alert('value'+val);
        var names=[];
        var probs=[];
         component.set("v.IsSpinner",true);
        var action1 = component.get("c.getImageAsBlob");
        action1.setCallback(this, function(response) {
            
            alert('returned values are'+JSON.stringify(response.getReturnValue()));
            var ret=response.getReturnValue();
            var name='';
            var prob='';
            for(var i=0;i<ret.length;i++){
                if(ret[i].mylabel==val){
                    name=ret[i].filename;
                    names.push(name);
                    prob=ret[i].prob;
                    probs.push(prob);
                }
            }
             component.set("v.IsSpinner",false);
            component.set("v.contents",names); 
            alert('content '+component.get("v.contents"));
            component.set("v.probability",probs);
            alert('probability '+component.get("v.probability"));
        });
        $A.enqueueAction(action1);
    }, 
})
