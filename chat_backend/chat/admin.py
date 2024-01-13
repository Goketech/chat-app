from django.contrib import admin
from chat.models import Message, Profile, User

# Register your models here.
class UserAdmin(admin.ModelAdmin):
    list_display = ['email']


class ProfileAdmin(admin.ModelAdmin):
    list_editable = ['verified']
    list_display = ['user', 'full_name' ,'verified']

class MessageAdmin(admin.ModelAdmin):
    list_display = ['sender', 'reciever', 'message', 'is_read', 'date', 'user']
    list_editable = ['is_read', 'message']


admin.site.register(User, UserAdmin)
admin.site.register( Profile,ProfileAdmin)
admin.site.register(Message, MessageAdmin)    