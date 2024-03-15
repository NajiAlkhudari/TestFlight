'use client'
import React from 'react'
import Image from 'next/image';
import Card from './card/Card';


const FirstScetion = () => {
  return (
    <div>
    <div className='grid sm:grid-cols-1  md:grid-cols-1 lg:grid-cols-2  xl:grid-cols-2 items-center p-8'>
   
      <div className=' m-28 space-y-10'>
<h1 className='text-6xl font-bold'>
Testing Apps with TestFlight
</h1>

<p className='text-2xl'>
Help developers test beta versions of their apps and App Clips using the TestFlight app. Download TestFlight on the App Store for iPhone, iPad, Mac, Apple TV, Apple Vision Pro, Watch, and iMessage.
</p>
      </div>
      <div className=' m-28'>
      <Image className='rounded-xl'
        src="/Test1.png"
        alt="Optimized Image"
        width={1200} // Optional: Set width for responsive resizing
        height={800} // Optional: Set height for responsive resizing
      />
      </div>
    </div>
    <div className='text-center space-y-6 m-10'>
    <h1 className='text-6xl font-bold '>
            Getting started
</h1>
<p className='text-lg'>
To test beta versions of apps and App Clips using TestFlight, you’ll need to accept an email or public link invitation from the developer and have a device that you can use to test. You’ll be able to access the builds that the developer makes available to you.

If you’re a member of the developer’s team, the developer can give you access to all builds or certain builds
</p>
</div>
<div className='grid sm:grid-cols-1  md:grid-cols-1 lg:grid-cols-2  xl:grid-cols-2 items-center p-8'>
    
      <div className=' m-28 space-y-4'>
      <Image className='rounded-xl'
        src="/cross-platform.png"
        alt="Optimized Image"
        width={60} // Optional: Set width for responsive resizing
        height={50} // Optional: Set height for responsive resizing
      />
   <h1 className='text-3xl font-semibold'>Required platforms</h1>
   
   <ul className='list-disc text-lg'>
  <li>
    iOS or iPadOS apps: iPhone, iPad, or iPod touch running iOS 14 or iPadOS 14 or later. App Clips require iOS 14 or iPadOS 14, or later.
  </li>
  <li>
    macOS apps: Mac running macOS 12 or later.
  </li>
  <li>
    tvOS apps: Apple TV running tvOS 14 or later.
  </li>
  <li>
    visionOS apps: Apple Vision Pro running visionOS 1 or later.
  </li>
  <li>
    watchOS apps: Apple Watch running watchOS 6 or later.
  </li>
</ul>
   
 
      </div>
      <div className=' m-28 space-y-4'>
      <Image className='rounded-xl'
        src="/translator.png"
        alt="Optimized Image"
        width={60} // Optional: Set width for responsive resizing
        height={50} // Optional: Set height for responsive resizing
      />
<h1 className='text-3xl font-semibold'>
Available languages
iOS, iPadOS, macOS, tvOS, and watchOS</h1>

<p className='text-lg'>
Arabic, Catalan, Chinese (simplified), Chinese (traditional), Croatian, Czech, Danish, Dutch, English (Australia), English (U.K.), English (U.S.), Finnish, French, French (Canada), German, Greek, Hebrew, Hindi, Hungarian, Indonesian, Italian, Japanese, Korean, Malaysian, Norwegian, Polish, Portuguese (Brazil), Portuguese (Portugal), Romanian, Russian, Slovak, Spanish, Spanish (Latin America), Swedish, Thai, Turkish, Ukrainian, and Vietnamese.</p>
      </div>
    </div>
    <div className=' bg-white text-black'>
    <div className='text-center space-y-6 p-8'>
    <h1 className='text-6xl font-bold '>
    Installation
</h1>
<p className='text-lg'>
To get started, install TestFlight on the device you’ll use for testing. Then, accept your email invitation or follow the public link invitation to install the beta app. You can install the beta app on up to 30 devices.

Note: Managed Apple IDs can't be used to test builds.
</p>
</div>
    </div>
    <div className='bg-white grid sm:grid-cols-1  md:grid-cols-1 lg:grid-cols-2  xl:grid-cols-2  '>
      <div className='p-4'>
      <Card className='card  bg-grey text-white space-y-2'>
      <Image className='rounded-xl place-items-center'
        src="/ipad.jpg"
        alt="Optimized Image"
        width={500} // Optional: Set width for responsive resizing
        height={100} // Optional: Set height for responsive resizing
      />
    <Card.Title>
    Installing a beta iOS or iPadOS app via email or public link invitation
       </Card.Title>
  

    
      <ul className='list-decimal  text-gray-500 font-sans'>
    <li>Install TestFlight on the iOS or iPadOS device that you'll use for testing.</li>
<li>Open your email invitation and tap "View in TestFlight" or tap the public link on your device.</li>
<li>If you're a new tester for the app, tap Accept.</li>
<li>Tap Install to install the app on your device.</li>
<li>If you're a returning tester, tap Update or Open.</li>
   </ul>
    
  
    <Card.Button
       className='btn btn-warning'> Learn more </Card.Button>
       </Card>

      </div>

      <div className='p-4'>
      <Card className='card  bg-grey text-white space-y-2'>
      <Image className='rounded-xl place-items-center'
        src="/mac.jpg"
        alt="Optimized Image"
        width={500} // Optional: Set width for responsive resizing
        height={100} // Optional: Set height for responsive resizing
      />
    <Card.Title>
    Installing a beta macOS app via email or public link invitation
 </Card.Title>



 <ul className='list-decimal  text-gray-500 font-sans'>
    <li>Install TestFlight on the Mac that you'll use for testing (TestFlight is not pre-installed on Mac).</li>
<li>Open your email invitation and click "View in TestFlight" or click the public link on your Mac.</li>
<li>If you're a new tester for the app, click Accept.</li>
<li>Click Install to install the app on your device.</li>
<li>If you're a returning tester, click Update or Open.</li>
   </ul>

  <Card.Button
       className='btn btn-warning'> Learn more </Card.Button>
       </Card>

      </div>
      <div className='p-4'>
      <Card className='card  bg-grey text-white space-y-2'>
      <Image className='rounded-xl place-items-center'
        src="/tv.jpg"
        alt="Optimized Image"
        width={400} // Optional: Set width for responsive resizing
        height={100} // Optional: Set height for responsive resizing
      />
    <Card.Title>
    Installing a beta tvOS app via email invitation
 </Card.Title>


    <ul className='list-decimal  text-gray-500 font-sans'>
    <li>Open your email invitation on a mobile device or computer.</li>
<li>Tap or click "View in TestFlight". You'll be taken to a web page with a redemption code.</li>
<li>Open TestFlight on Apple TV. (Note: TestFlight is pre-installed on Apple TV)</li>
<li>Go to Redeem and enter the redemption code.</li>
   </ul>
  
      <Card.Button
       className='btn btn-warning'> Learn more </Card.Button>
       </Card>

      </div>
      <div className='p-4'>
      <Card className='card  bg-grey text-white space-y-2'>
      <Image className='rounded-xl place-items-center'
        src="/watch.jpg"
        alt="Optimized Image"
        width={500} // Optional: Set width for responsive resizing
        height={100} // Optional: Set height for responsive resizing
      />
    <Card.Title>Installing a beta watchOS app via email or public link invitation
</Card.Title>


<ul className='list-decimal  text-gray-500 font-sans'>
<li>
Install TestFlight on the iOS device paired with the Apple Watch that you’ll use for testing.

</li>
<li>
Open your email invitation and tap "View in TestFlight" or tap on the public link on your iOS device.
</li>
<li>
If you’re a new tester for the app, tap Accept.
</li>
<li>
If you're testing an app that’s for Apple Watch only, tap "Install" from the Apps list.
</li>
<li>
If the app is an iOS app that includes an Apple Watch app, install the iOS app first, then go to the App Details page in the Information section. If the Apple Watch app is available and compatible with your watch, there will be a button to install, update, or open it.

</li>
   </ul>
      <Card.Button
       className='btn btn-warning'> Learn more </Card.Button>
   </Card>

      </div>

    </div>
    </div>
  )
}

export default FirstScetion
