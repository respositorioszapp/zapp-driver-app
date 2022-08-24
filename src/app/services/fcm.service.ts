import { Injectable } from '@angular/core';
import {
  Plugins,
  PushNotification,
  PushNotificationToken,
  PushNotificationActionPerformed,
  Capacitor,
  NotificationChannel
} from '@capacitor/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';

const { PushNotifications, Haptics } = Plugins;
const { Network, LocalNotifications } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class FcmService {
  audio
  notifications: Subject<PushNotification> = new Subject<PushNotification>()
  constructor(private router: Router) { }

  initPush() {
    if (Capacitor.platform !== 'web') {
      if (Capacitor.platform == "android") {
        /**
         * Build the notification channel with high imporatnce
         */
        const notificationChannel: NotificationChannel = {
          id: 'pop-notifications',// id must match android/app/src/main/res/values/strings.xml's default_notification_channel_id
          name: 'Pop notifications',
          description: 'Pop notifications',
          importance: 5,
          visibility: 1,
          vibration: true,
          lights: true
        };
        LocalNotifications.createChannel(notificationChannel);
        PushNotifications.createChannel(notificationChannel);
      }
      this.registerPush();
    }
  }

  playAudio() {
    if (environment.PLAY_AUDIO_ON_REQUEST == true) {
      this.audio = new Audio(environment.AUDIO_PATH);
      this.audio.play();
    }
  }

  stopAudio() {
    this.audio.pause();
  }

  private registerPush() {
    PushNotifications.requestPermission().then((permission) => {
      if (permission.granted) {
        // Register with Apple / Google to receive push via APNS/FCM
        PushNotifications.register();
      } else {
        // No permission for push granted
      }
    });

    PushNotifications.addListener(
      'registration',
      (data: PushNotificationToken) => {
        //console.log('My token: ' + JSON.stringify(data));
        localStorage.setItem('fcmId', data.value);

      }
    );

    PushNotifications.addListener('registrationError', (error: any) => {
      console.log('Error: ' + JSON.stringify(error));
    });

    PushNotifications.addListener(
      'pushNotificationReceived',
      async (notification: PushNotification) => {

        const isPushNotification = !!notification.title || !!notification.body;

        // if this is a push notification received when the app is in the foreground on Android
        if (isPushNotification) {

          // We schedule a LocalNotification 1 second later since Capacitor for Android doesn't show anything in this case
          LocalNotifications.schedule({
            notifications: [{
              title: notification.title,
              body: notification.body,
              id: new Date().getUTCMilliseconds(),
              schedule: {
                at: new Date(Date.now() + 1000)
              },
              extra: notification.data,
              channelId: 'pop-notifications'
            }]
          });
        }
        Haptics.vibrate();
        setTimeout(() => {
          this.stopAudio();
        }, 3000)
        this.notifications.next(notification);
        this.notifications = new Subject<PushNotification>()
        console.log('Push received: ' + JSON.stringify(notification));
      }
    );

    PushNotifications.addListener(
      'pushNotificationActionPerformed',
      async (notification: PushNotificationActionPerformed) => {
        const data = notification.notification.data;
        console.log('Action performed: ' + JSON.stringify(notification.notification));
        if (data.detailsId) {
          // this.router.navigateByUrl(`/home/${data.detailsId}`);
          this.router.navigateByUrl('tabs/home');
        }
      }
    );
  }

}