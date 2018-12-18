
let profiles = [];


$('#btn').click( function() {

    var profileInfo = {
        fullName: $('#name').val(),
        bio: $('#bio').val(),
        achievements: $('#achievement').val(),
        dateOfBirth: $('#dob').val(),
    }

    profiles.push(profileInfo);
    
    // for (let i = 0; i < profiles.length; i++) {
    //     $('.profile').html(`${profiles[i].fullName}<br>${profiles[i].bio}<br>${profiles[i].achievements}<br>${profiles[i].dateOfBirth}`);
    // }

    let i = 0;


    $('.profile').html(`${profiles[i].fullName}<br>${profiles[i].bio}<br>${profiles[i].achievements}<br>${profiles[i].dateOfBirth}`);
});