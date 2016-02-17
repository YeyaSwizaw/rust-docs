initSidebarItems({"fn":[["drop_library",""],["load_library",""],["load_symbol",""]],"struct":[["Snek","This provides an interface for manually loading a dynamic library and symbols from it. While this exists, it is more recommended to use the  `snek!` macro to generate a wrapper for a library  automatically.A `Snek` instance contains nothing but a handle to the loaded library, and provides a single method for loading symbols from the library. When the instance is dropped, it unloads the library, so the lifetime of any loaded symbols is tied to the lifetime of the `Snek` instance.For more information about using the loaded symbols see the  `Symbol`  documentation.Example"]]});