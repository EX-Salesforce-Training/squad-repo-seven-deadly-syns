trigger SubscribersTrigger on News_Subscriber__c (before insert) 
{
    Set<string> newSubs = new Set<string>();
    
    for(News_Subscriber__c s: Trigger.new) newSubs.add( s.Email__c );
    
    // check all newly created subscribers (Should be just 1)
	for( News_Subscriber__c sub : [select Email__c from News_Subscriber__c where Email__c = :newSubs] )
    {
        if(sub.Email__c != null)
        {
            //Throw error
            System.assert(false, 'Email Already Exsists');
            
            /*
            try {
            	System.assert(false, 'Email Already Exsists');
        	} catch(DmlException e) 
            {
            	throw new BaseException('Email Already Exists within News subscribers.', e);
        	}
            */
    	}
    }
}