import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import React, { useCallback } from 'react'
import { useParams } from 'react-router-dom';

function Video() {
  let {roomId}=useParams() 
  const meeting = useCallback(async (element) => {
    if (!element) return;
    const appID = 1537453518;
    const serverSecret = "8988f3a7d429e79a98c95806a13bcc2d";
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
