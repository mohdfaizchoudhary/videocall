import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import React, { useCallback } from 'react'
import { useParams } from 'react-router-dom';

function Video() {
  let {roomId}=useParams() 
  const meeting = useCallback(async (element) => {
    if (!element) return;
    const appID = 768568528;
    const serverSecret = "52cbd976671510543186b64c63903f8b";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, Date.now().toString(), "Mohd Faiz");
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: 'Copy link',
          url: `${window.location.origin}${window.location.pathname}`,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.GroupCall,
      },
    });
  }, [roomId]);

  return (
    <div ref={meeting} style={{ width: '100vw', height: '100vh' }} />
  )
}

export default Video
