#include "pch.h"
#include "Class1.h"

using namespace RuntimeComponent1;
using namespace Platform;

Class1::Class1()
{
}

Platform::String ^ RuntimeComponent1::Class1::Hello()
{
	return "hello-world";
}
