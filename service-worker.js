self.addEventListener('push', function(event) {
    let options = {
        body: event.data.text(),
        icon: '/images/icon.png',
        badge: '/images/badge.png'
    };
    
    event.waitUntil(
        self.registration.showNotification('Jadwal Sholat', options)
    );
});
