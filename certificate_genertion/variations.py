
import os


os.environ['OPENAI_API_KEY']='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'


from openai import OpenAI
client = OpenAI()

response = client.images.create_variation(
  image=open("certificate_genertion/img-212PI67iNtBnCoNeVhn8IjAR.png", "rb"),
  n=2,
  size="1024x1024"
)

image_url = response.data[0].url

print(image_url)