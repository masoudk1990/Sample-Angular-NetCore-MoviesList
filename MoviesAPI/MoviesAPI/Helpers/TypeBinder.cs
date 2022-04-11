using Microsoft.AspNetCore.Mvc.ModelBinding;
using Newtonsoft.Json;
using System.Threading.Tasks;

namespace MoviesAPI.Helpers
{
    public class TypeBinder<T> : IModelBinder
    {
        public Task BindModelAsync(ModelBindingContext bindingContext)
        {
            var propertyName = bindingContext.ModelName;

            var value = bindingContext.ValueProvider.GetValue(propertyName);
            if (value == ValueProviderResult.None)
                return Task.CompletedTask;
            else
                try
                {
                    bindingContext.Result = ModelBindingResult.Success(JsonConvert.DeserializeObject<T>(value.FirstValue));
                }
                catch
                {
                    bindingContext.ModelState.TryAddModelError(propertyName, "The given value is not of the correct type");
                }

            return Task.CompletedTask;
        }
    }
}