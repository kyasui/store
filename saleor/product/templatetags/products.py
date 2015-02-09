from django import template
from ..models import Product

register = template.Library()


@register.inclusion_tag('product/_list.html')
def product_list():
    return {'products': Product.objects.all()}
