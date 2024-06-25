import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import  { useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {

  const [longUrl, setLongUrl] = useState();
  const navigate = useNavigate();

  const handleShorten = (e) => {
    e.preventDefault()
    if(longUrl) navigate(`/auth?createNew=${longUrl}`);
  }
  return (
    <div className='flex flex-col items-center'>
      <h2 className='my-10 sm:my-16 text-3xl sm:text-6xl lg:text-7xl text-white text-center font-extrabold'> 
      Precision Linking at Your Fingertips</h2>

        <form onSubmit={handleShorten}  className='sm:h-14 flex flex-col sm:flex-row w-full md:w-2/4 gap-2'>

          <Input type="url" placeholder="Enter your long URL" value={longUrl}
          className="h-full flex-1 py-2 px-4" onChange={(e) => setLongUrl(e.target.value)} />
          <Button className="h-full" type="submit" variant="destructive"> Shorten </Button> 
        </form>

        <img src="/design.png" alt='banner' className='w-full my-11 md:px-11' />

        <Accordion type="multiple" collapsible className='w-full md:px-11'>
            <AccordionItem value="item-1">
              <AccordionTrigger>How does this website works?</AccordionTrigger>
              <AccordionContent>
                When you enter a long URL, the system will generate and shorter version of that URL.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>Do I need an account to use the app?</AccordionTrigger>
              <AccordionContent>
                Yes, You need to create an account which will allow you to manage URLs, and view other analytics and can even customize your short URLs.
              </AccordionContent>
            </AccordionItem>


            <AccordionItem value="item-3">
              <AccordionTrigger>Is the service free?</AccordionTrigger>
              <AccordionContent>
                The service is absolutely free of cost.
              </AccordionContent>
            </AccordionItem>
      </Accordion>

    </div>

  );
}

export default LandingPage