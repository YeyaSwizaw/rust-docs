initSidebarItems({"enum":[["Error","This enum stores information about the error returned when loading a library or symbol fails. On unix platforms, it hold the result of `dlerror()`."]],"fn":[["drop_library",""],["load_library",""],["load_symbol",""]],"macro":[["snek!","This macro is used to generate a struct that wraps a dynamic library with generated loading code. Each defined function will be loaded as a symbol from the library when an instance of the struct is constructed, and can be called via functions of the same name attached to the struct.In the same way as a `Snek` instance, when an instance of a struct defined by this macro is dropped, the library is unloaded.ExampleThis example loads the same function as given in the `Snek` usage example:Additional functions can be loaded by simply adding them in the macro usage:"]],"struct":[["Snek","This provides an interface for manually loading a dynamic library and symbols from it. While this exists, it is more recommended to use the  `snek!` macro to generate a wrapper for a library  automatically.A `Snek` instance contains nothing but a handle to the loaded library, and provides a single method for loading symbols from the library. When the instance is dropped, it unloads the library, so the lifetime of any loaded symbols is tied to the lifetime of the `Snek` instance.For more information about using the loaded symbols see the  `Symbol`  documentation.Example"],["Symbol","This provides an interface around a symbol loaded from a dynamic library. This should not be constructed manually, but returned from `Snek::symbol` or used internally via the `snek!` macro."]]});